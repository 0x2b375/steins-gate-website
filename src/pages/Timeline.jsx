// src/pages/Timeline.jsx
import { Timeline } from "antd";

const timelineItems = [
  {
    color: "#22c55e",
    children: (
      <>
        <div>
          <strong>Event</strong>: Creation of Future Gadget Lab
        </div>
        <p>
          Description: Okabe forms the lab and gathers fellow &quot;lab
          members&quot; to invent gadgets.
        </p>
        <img
          src='https://i.pinimg.com/originals/3b/a3/79/3ba379ab6c4264f4d79a147a853947a0.jpg'
          alt='Time Travel'
          className='w-full mt-2 rounded'
          draggable={false}
        />
      </>
    ),
  },
  {
    color: "#22c55e",
    children: (
      <>
        <div>
          <strong>Event</strong>: Discovery of Time Travel
        </div>
        <p>
          Description: The team accidentally discovers time travel via the Phone
          Microwave.
        </p>
        <img
          src='https://images.squarespace-cdn.com/content/v1/542708d5e4b02ef84b7afeeb/1442933801240-ID3MLR5BIFINYFZZJZMA/image-asset.jpeg'
          alt='Time Travel'
          className='w-full mt-2 rounded'
          draggable={false}
        />
      </>
    ),
  },
  {
    color: "#22c55e",
    children: (
      <>
        <div>
          <strong>Event</strong>: Operation Skuld
        </div>
        <p>
          Description: A complex plan to reach the &quot;Steins;Gate&quot; world
          line.
        </p>
        <img
          src='https://shindeiie.wordpress.com/wp-content/uploads/2011/09/steinsgate2402.jpg'
          alt='Time Travel'
          className='w-full mt-2 rounded'
          draggable={false}
        />
      </>
    ),
  },
];

const TimelinePage = () => (
  <div className='text-accent bg-primary p-10 min-h-screen'>
    <h1 className='text-4xl text-center mb-10 neon-glow'>
      Steins;Gate Timeline
    </h1>
    <Timeline
      mode='alternate'
      className='text-white text-lg'
      items={timelineItems}
    />
  </div>
);

export default TimelinePage;
