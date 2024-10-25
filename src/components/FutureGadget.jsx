import { Card, Col, Row } from "antd";

const gadgets = [
  {
    name: "Phone Microwave (name subject to change)",
    description:
      "A modified microwave with a mobile phone attached. It can be commanded to warm food from a distance. Through serendipity, it also can send messages to the past.",
  },
  {
    name: "Bamboo Helicam",
    description:
      "A camera attached to a bamboo toy helicopter. It is able to record aerial footage, though the camera doesn't have a stabilizer, resulting image will be constantly rotating.",
  },
  {
    name: "Bit Particle Gun",
    description:
      "A toy gun modified to act as a TV remote. However, only the Channel + button works.",
  },
  {
    name: "Moad Snake",
    description:
      "An instant humidifier capable of generating insane amounts of steam in seconds.",
  },
  {
    name: "Cyalume Saber",
    description:
      "An imitation of one of the lightsabers from the popular in-universe movie franchise 'Spark Wars'. It can also produce fake blood for added realism to the recreation of fights from the movies.",
  },
  {
    name: "Time Machine",
    description: "A functional Time Machine.",
  },
];

const FutureGadgets = () => (
  <Row gutter={[16, 16]}>
    {gadgets.map((gadget, index) => (
      <Col xs={24} sm={12} md={8} key={index}>
        <Card
          title={
            <div className='text-green-500 font-bold flex justify-between'>
              <div className='text-xl'>{gadget.name}</div>
            </div>
          }
          className='border-green-500 bg-primary h-full flex flex-col'
        >
          <p className='text-gray-400 flex-grow'>{gadget.description}</p>
        </Card>
      </Col>
    ))}
  </Row>
);
export default FutureGadgets;
