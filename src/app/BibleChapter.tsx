import React from 'react';
// eslint-disable-next-line react/prop-types
function BibleChapter() {

    const endDate    = '2023-10-22T00:00:00+05:30';


    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);


    return (
        <div className={'space-y-2'}>{`Today's Bible reading: Psalm ${Math.trunc((new Date(endDate) - ISTTime)/(1000 * 60 * 60 * 24))}`}</div>
    );
}

export default BibleChapter;