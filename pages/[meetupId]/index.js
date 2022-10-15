import { Fragment } from "react";

function MeetupDetails() {
   return (
      <Fragment>
         <img
         src="https://gdb.voanews.com/6CCF6674-EA77-4E04-A699-EA6107B6C251_w1080_h608_s.jpg"
         alt="A First Meetup"
         />
         <h1>A First Meetup</h1>
         <address>Some Strret 5, Some City</address>
         <p>The meetup description</p>
      </Fragment>
   );
};

export default MeetupDetails;