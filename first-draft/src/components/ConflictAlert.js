import { useState } from 'react'
import React from 'react'


const ConflictAlert = ( hasConflict) => {
const isTrue = false

return (
    <>
      {isTrue ? (
        <div className ='conflicts'>
            <h2>Yo, conflict!</h2>
            <p>These are all of your conflicts, fix them bro.</p>
        </div>

      ) : (
        <div className ='no-conflicts'>
          <h2>No conflicts!</h2>

        </div>
      )}
    </>
  );
}


export default ConflictAlert