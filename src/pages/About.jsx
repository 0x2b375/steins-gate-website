// src/pages/About.jsx
import { Card, Collapse, ConfigProvider } from "antd";

const characters = [
  {
    name: "Rintarou Okabe",
    alias: "Hououin Kyouma",
    description:
      "A self-proclaimed mad scientist with an eccentric personality.",
    image: "rintarou.png",
    labMemberNumber: "001",
  },
  {
    name: "Kurisu Makise",
    alias: "Assistant",
    description: "A brilliant neuroscientist with a calm, skeptical nature.",
    image: "makise.png",
    labMemberNumber: "004",
  },
  {
    name: "Mayuri Shiina",
    alias: "Mayushii",
    description: "Okabe's childhood friend and lab assistant",
    image: "mayuri.png",
    labMemberNumber: "002",
  },
  {
    name: "Suzuki Amane",
    alias: "Suzuki",
    description: "part-time employee for Yuugo Tennouji's CRT store",
    image: "suzuki.png",
    labMemberNumber: "008",
  },
  {
    name: "Moeka Kiryu",
    alias: "Moeka",
    description: "silent and mysterious girl",
    image: "moeka.png",
    labMemberNumber: "005",
  },
  {
    name: "Luka Urushibara",
    alias: "Ruka",
    description:
      "close friend of Mayuri, while feminine in appearance and personality, Luka is male on most world lines",
    image: "ruka.png",
    labMemberNumber: "006",
  },
  {
    name: "Rumiho Akiha",
    alias: "Faris",
    description:
      "a part-time employee and owner of the maid café MayQueen NyanNyan",
    image: "faris.png",
    labMemberNumber: "007",
  },
  {
    name: "Itaru Hashida",
    alias: "Daru",
    description: "otaku and a bit of a pervert",
    image: "daru.png",
    labMemberNumber: "003",
  },
];

const About = () => (
  <div className='text-accent bg-primary p-10 max-sm:p-2 min-h-screen'>
    <h1 className='text-4xl text-center mb-10 neon-glow'>
      Future Gadget Lab Members
    </h1>
    <div className='grid grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-1 gap-6'>
      {characters
        .sort(
          (a, b) => parseInt(a.labMemberNumber) - parseInt(b.labMemberNumber)
        )
        .map((character) => (
          <Card
            key={character.name}
            style={{ width: 350 }}
            cover={
              <div className='h-64 overflow-hidden'>
                <img
                  alt={character.name}
                  src={character.image}
                  draggable={false}
                  className='w-full'
                />
              </div>
            }
            className='bg-primary text-white shadow-lg border-2 border-green-500'
            title={
              <div className='text-green-500 font-bold flex justify-between'>
                <div>
                  {character.name}
                  <span className='text-sm text-gray-400 ml-2'>
                    ({character.alias})
                  </span>
                </div>
                <div className='text-accent'>{character.labMemberNumber}</div>
              </div>
            }
          >
            <ConfigProvider
              theme={{ components: { Collapse: { contentBg: "#000" } } }}
            >
              <Collapse
                className=' border-0'
                accordion
                items={[
                  {
                    key: "1",
                    label: <span className='text-green-500'>Bio</span>,
                    children: (
                      <p className='text-accent'>{character.description}</p>
                    ),
                  },
                ]}
              />
            </ConfigProvider>
          </Card>
        ))}
    </div>
  </div>
);

export default About;
