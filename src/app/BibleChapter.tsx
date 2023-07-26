import React from 'react';

/* eslint-disable */
function BibleChapter() {

    const endDate = '2023-10-22T00:00:00+05:30';


    var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    var chapter = (Math.trunc((new Date(endDate).valueOf() - ISTTime.valueOf()) / (1000 * 60 * 60 * 24))) + 1;

    return (
            <div className={'space-y-2 text-2xl lg:text-6xl text-green-500 rounded-lg'}>
                {`Today's Bible reading: `}
                <a href={`https://www.biblegateway.com/passage/?search=Psalms+${chapter}&version=MSG`} className={"underline text-blue-600 hover:text-blue-800 cursor-pointer relative z-2"}>Psalm {chapter}</a>
            </div>
    );
}

export default BibleChapter;