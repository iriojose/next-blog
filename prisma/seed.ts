import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.planet.createMany({
      data: [
        {
            "name": "Tatooine",
            "description": "Un planeta desértico y hogar de Luke Skywalker.",
            "population": 200000,
            "wheather": "Árido"
          },
          {
            "name": "Naboo",
            "description": "Un planeta con vastos lagos y praderas, hogar de Padmé Amidala.",
            "population": 4500000,
            "wheather": "Templado"
          },
          {
            "name": "Coruscant",
            "description": "El centro político de la galaxia, completamente urbanizado.",
            "population": 1000000000,
            "wheather": "Urbano"
          },
          {
            "name": "Hoth",
            "description": "Un planeta helado y remoto.",
            "population": 0,
            "wheather": "Frío extremo"
          },
          {
            "name": "Endor",
            "description": "Un planeta boscoso, hogar de los Ewoks.",
            "population": 30000,
            "wheather": "Templado"
          },
          {
            "name": "Dagobah",
            "description": "Un planeta pantanoso y remoto, donde Yoda se exilió.",
            "population": 0,
            "wheather": "Húmedo"
          },
          {
            "name": "Mustafar",
            "description": "Un planeta volcánico, lugar del duelo entre Anakin y Obi-Wan.",
            "population": 0,
            "wheather": "Volcánico"
          },
          {
            "name": "Alderaan",
            "description": "Un planeta pacífico y hermoso, destruido por la Estrella de la Muerte.",
            "population": 2000000000,
            "wheather": "Templado"
          },
          {
            "name": "Kamino",
            "description": "Un planeta oceánico, conocido por sus instalaciones de clonación.",
            "population": 1000000,
            "wheather": "Lluvioso"
          },
          {
            "name": "Geonosis",
            "description": "Un planeta desértico, sede de la primera batalla de las Guerras Clon.",
            "population": 100000,
            "wheather": "Árido"
          },
          {
            "name": "Kashyyyk",
            "description": "Un planeta boscoso, hogar de los Wookiees.",
            "population": 4500000,
            "wheather": "Templado"
          },
          {
            "name": "Bespin",
            "description": "Un planeta gaseoso, hogar de la Ciudad Nube.",
            "population": 6000000,
            "wheather": "Gaseoso"
          },
          {
            "name": "Jakku",
            "description": "Un planeta desértico, conocido por sus restos de naves estrelladas.",
            "population": 50000,
            "wheather": "Árido"
          },
          {
            "name": "Yavin IV",
            "description": "Una luna selvática, base de la Alianza Rebelde.",
            "population": 1000,
            "wheather": "Húmedo"
          },
          {
            "name": "Mandalore",
            "description": "Un planeta devastado por la guerra, hogar de los Mandalorianos.",
            "population": 1500000,
            "wheather": "Árido"
          },
          {
            "name": "Dathomir",
            "description": "Un planeta oscuro y peligroso, hogar de las Hermanas de la Noche.",
            "population": 50000,
            "wheather": "Oscuro"
          },
          {
            "name": "Lothal",
            "description": "Un planeta agrícola, importante en la Rebelión.",
            "population": 1000000,
            "wheather": "Templado"
          },
          {
            "name": "Scarif",
            "description": "Un planeta tropical, sitio de la batalla final en Rogue One.",
            "population": 200000,
            "wheather": "Tropical"
          },
          {
            "name": "Corellia",
            "description": "Un planeta industrial, conocido por sus naves espaciales.",
            "population": 300000000,
            "wheather": "Urbano"
          },
          {
            "name": "Ilum",
            "description": "Un planeta helado, fuente de cristales Kyber.",
            "population": 0,
            "wheather": "Frío extremo"
        }
      ],
    });
  
    await prisma.character.createMany({
      data: [
        {
          "name": "Luke Skywalker",
          "description": "Un Jedi Knight.",
          "hairColor": "Rubio",
          "raze": "Humano"
        },
        {
          "name": "Darth Vader",
          "description": "Un Sith Lord.",
          "hairColor": "Ninguno",
          "raze": "Humano"
        },
        {
          "name": "Leia Organa",
          "description": "Princesa de Alderaan y líder de la Alianza Rebelde.",
          "hairColor": "Castaño",
          "raze": "Humano"
        },
        {
          "name": "Han Solo",
          "description": "Un contrabandista y capitán del Halcón Milenario.",
          "hairColor": "Castaño",
          "raze": "Humano"
        },
        {
          "name": "Yoda",
          "description": "Un maestro Jedi de gran sabiduría.",
          "hairColor": "Blanco",
          "raze": "Desconocido"
        },
        {
          "name": "Obi-Wan Kenobi",
          "description": "Un maestro Jedi que entrenó a Anakin y Luke Skywalker.",
          "hairColor": "Castaño",
          "raze": "Humano"
        },
        {
          "name": "Padmé Amidala",
          "description": "Reina y senadora de Naboo.",
          "hairColor": "Castaño",
          "raze": "Humano"
        },
        {
          "name": "Anakin Skywalker",
          "description": "El Elegido que se convirtió en Darth Vader.",
          "hairColor": "Rubio",
          "raze": "Humano"
        },
        {
          "name": "Chewbacca",
          "description": "Un Wookiee y copiloto del Halcón Milenario.",
          "hairColor": "Marrón",
          "raze": "Wookiee"
        },
        {
          "name": "Lando Calrissian",
          "description": "Un contrabandista y administrador de Ciudad Nube.",
          "hairColor": "Negro",
          "raze": "Humano"
        },
        {
          "name": "Rey",
          "description": "Una chatarrera que se convierte en Jedi.",
          "hairColor": "Castaño",
          "raze": "Humano"
        },
        {
          "name": "Kylo Ren",
          "description": "Líder de los Caballeros de Ren y aprendiz de Snoke.",
          "hairColor": "Negro",
          "raze": "Humano"
        },
        {
          "name": "Finn",
          "description": "Un ex-soldado de asalto que se une a la Resistencia.",
          "hairColor": "Negro",
          "raze": "Humano"
        },
        {
          "name": "Poe Dameron",
          "description": "Un piloto de la Resistencia.",
          "hairColor": "Negro",
          "raze": "Humano"
        },
        {
          "name": "Ahsoka Tano",
          "description": "Una ex-padawan de Anakin Skywalker.",
          "hairColor": "Ninguno",
          "raze": "Togruta"
        },
        {
          "name": "Mace Windu",
          "description": "Un maestro Jedi conocido por su sable de luz púrpura.",
          "hairColor": "Calvo",
          "raze": "Humano"
        },
        {
          "name": "Qui-Gon Jinn",
          "description": "Un maestro Jedi que descubrió a Anakin Skywalker.",
          "hairColor": "Castaño",
          "raze": "Humano"
        },
        {
          "name": "Jabba the Hutt",
          "description": "Un señor del crimen en Tatooine.",
          "hairColor": "Ninguno",
          "raze": "Hutt"
        },
        {
          "name": "Boba Fett",
          "description": "Un cazarrecompensas clon de Jango Fett.",
          "hairColor": "Negro",
          "raze": "Humano"
        },
        {
          "name": "Darth Maul",
          "description": "Un aprendiz Sith con un sable de luz doble.",
          "hairColor": "Ninguno",
          "raze": "Zabrak"
        }
      ]
    });
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });