# import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy.selector import Selector


class basicScraper(CrawlSpider):
    name = 'ths'
    allowed_domains = ["flytrapcare.com"]
    start_urls = ["https://www.flytrapcare.com/store/venus-fly-traps/"]

    rules = (
        # Extract links matching 'category.php' (but not matching 'subsection.php')
        # and follow links from them (since no callback means follow=True by default).
        #Rule(LinkExtractor(allow=('category\.php', ), deny=('subsection\.php', ))),

        # Extract links matching 'item.php' and parse them with the spider's method parse_item
        Rule(LinkExtractor(allow='all-venus-fly-traps',), callback='parse_item'),
    )

    def parse_ite(self, response):
        self.logger.info('Hi, this is an item page! %s', response.url)
        item = scrapy.Item()
        item['id'] = response.xpath('//td[@id="item_id"]/text()').re(r'ID: (\d+)')
        item['name'] = response.xpath('//td[@id="item_name"]/text()').get()
        item['description'] = response.xpath('//td[@id="item_description"]/text()').get()
        item['link_text'] = response.meta['link_text']
        url = response.xpath('//td[@id="additional_data"]/@href').get()
        return response.follow(url, self.parse_additional_page, cb_kwargs=dict(item=item))
    
    def parse_item(self, response):

        print("called---------------------------------------------------------------------")
        Qlist = response.xpath('//li//div[@class = "product details product-item-details"]').getall()
        sectionText = map(str, Qlist)

        def find_items(string):
            name = Selector(text=string).xpath('//a[@class = "product-item-link"]//text()').get().strip()

            description = "".join(Selector(text=string).xpath('//div[@class= "product description product-item-description"]//text()').getall()).strip()
            return (name, description)

        print("///////////////////////////////////////////////////////////////////////////////////")
        for item in sectionText:
            tupli = find_items(item)
            yield {'Venus Flytrap Name': tupli[0],
                'Description': tupli[1]}
        # descrips = response.xpath('//li//div[@class="product description product-item-description"]//text()')