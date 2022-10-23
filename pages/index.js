import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
   {
      id: "m1",
      title: "A First Meetup",
      image: "https://gdb.voanews.com/6CCF6674-EA77-4E04-A699-EA6107B6C251_w1080_h608_s.jpg",
      address: "Some address 10, 12345 Some City",
      description: "This is the first meetup!",
   },
   {
      id: "m2",
      title: "A Second Meetup",
      image: "https://gdb.voanews.com/6CCF6674-EA77-4E04-A699-EA6107B6C251_w1080_h608_s.jpg",
      address: "Some address 10, 12345 Some City",
      description: "This is the second meetup!",
   },
];

function HomePage(props) {
   return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
   // fetch data from an API
   return {
      props: {
         meetups: DUMMY_MEETUPS
      }
   }
};

export default HomePage;
