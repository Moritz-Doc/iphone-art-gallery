import GlobalStyle from "../styles";

import Layout from "../components/Layout";
import { useState } from "react";

const dataInit = [
  {
    slug: "creation-adam",
    imageSource:
      "/ProductImages/Creation of Adam Michelangelo iphone art wallpaper.jpg",
    title: "The Creation of Adam (detail)",
    artist: "Michelangelo di Lodovico Buonarroti Simoni (Italian)",
    year: "1508-1512",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "death-marat",
    imageSource:
      "/ProductImages/Death of Marat Jacques-Louis David iphone art wallpaper.jpg",
    title: "The Death of Marat",
    artist: "Jacques-Louis David (French)",
    year: "1793",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "pearl-earring",
    imageSource:
      "/ProductImages/Girl With Pearl Earring Vermeer iphone art wallpaper.jpg",
    title: "Girl with a Pearl Earring",
    artist: "Jacques-Louis David (French)",
    year: "1665",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "the-kiss",
    imageSource: "/ProductImages/Kiss Klimt iphone art wallpaper.jpg",
    title: "The Kiss",
    artist: "Gustav Klimt (Austrian)",
    year: "1707/08",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "medusa",
    imageSource: "/ProductImages/Medusa Caravaggio iphone art wallpaper.jpg",
    title: "Medusa",
    artist: "Michelangelo Merisi da Caravaggio (Italian)",
    year: "1596/97",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "mona-lisa",
    imageSource:
      "/ProductImages/Mona Lisa Leonardo da Vinci iphone art wallpaper.jpg",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci (Italian)",
    year: "1503",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "son-man",
    imageSource:
      "/ProductImages/Son of Man Apple Magritte iphone art wallpaper.jpg",
    title: "The Son Of Man",
    artist: "René Magritte (Belgian)",
    year: "1964",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "starry-night",
    imageSource:
      "/ProductImages/Starry Night Van Gogh iphone art wallpaper.jpg",
    title: "The Starry Night",
    artist: "Vincent Van Gogh (Dutch)",
    year: "1889",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "sun-flowers",
    imageSource: "/ProductImages/Sunflowers Van Gogh iphone art wallpaper.jpg",
    title: "Sunflowers",
    artist: "Vincent Van Gogh (Dutch)",
    year: "1887",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "sunrise",
    imageSource: "/ProductImages/Sunrise Claude Monet iphone art wallpaper.jpg",
    title: "Sunrise",
    artist: "Claude Monet (French)",
    year: "1872",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "two-cherubs",
    imageSource: "/ProductImages/Two Cherubs iphone art wallpaper Raphael.jpg",
    title: "Two Cherubs, The Sistine Madonna (Detail)",
    artist: "Raffaello Sanzio da Urbino (Italian)",
    year: "1513",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },

  {
    slug: "sea-fog",
    imageSource:
      "/ProductImages/Wanderer Sea Fog Caspar David Friedrich iphone art wallpaper.jpg",
    title: "Wanderer Above The Sea Of Fog",
    artist: "Caspar David Friedrich",
    year: "1818",
    dimensions: {
      height: 1500,
      width: 1500,
      type: "jpg",
    },
  },
];

/* const dataInit = [
  {
    "slug": "orange-red-and-green",
    "artist": "Steve Johnson",
    "name": "Orange Red and Green Abstract Painting",
    "imageSource": "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    "year": "2018",
    "genre": "Abstract Painting",
    "colors": [
      "#0f5855",
      "#e6ba15",
      "#b42011",
      "#cec4c6",
      "#d5561f"
    ],
    "dimensions": {
      "height": 2432,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "blue-and-red",
    "artist": "Jung-Hua Lui",
    "name": "Blue and Red",
    "imageSource": "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    "year": "2019",
    "genre": "Abstract Painting",
    "colors": [
      "#3f9eab",
      "#dfa597",
      "#323f6a",
      "#88d9ce",
      "#5a614c"
    ],
    "dimensions": {
      "height": 2560,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "clay-bust-sculptures",
    "artist": "dilara irem",
    "name": "Clay Bust Sculptures",
    "imageSource": "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    "year": "2022",
    "genre": "Classics",
    "colors": [
      "#27231d",
      "#af8b69",
      "#775942",
      "#8a745b",
      "#6c6c6c"
    ],
    "dimensions": {
      "height": 1280,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "bread-and-fruits",
    "artist": "Lisa vhb",
    "name": "Flatlay Photography of Bread and Fruits",
    "imageSource": "https://example-apis.vercel.app/assets/art/bread-and-fruits.jpg",
    "year": "unknown",
    "genre": "Veggie Foods",
    "colors": [
      "#dadee1",
      "#3c2938",
      "#994836",
      "#e1be47",
      "#8f9197"
    ],
    "dimensions": {
      "height": 3229,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "kiwi-juice-on-glass",
    "artist": "Alexander Mils",
    "name": "Kiwi Juice on Glass",
    "imageSource": "https://example-apis.vercel.app/assets/art/kiwi-juice-on-glass.jpg",
    "year": "2015",
    "genre": "Veggie Foods",
    "colors": [
      "#a6b33f",
      "#356e0b",
      "#eeeee4",
      "#bec99e",
      "#635523"
    ],
    "dimensions": {
      "height": 2899,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "silhouette-of-trees",
    "artist": "Min An",
    "name": "Silhouette Photo of Trees",
    "imageSource": "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg",
    "year": "2017",
    "genre": "Nature",
    "colors": [
      "#f1f3f4",
      "#161718",
      "#979898",
      "#7c7c7c",
      "#7c747c"
    ],
    "dimensions": {
      "height": 1278,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "split-shot-of-whale",
    "artist": "Elianne Dipp",
    "name": "Split Shot of Whale",
    "imageSource": "https://example-apis.vercel.app/assets/art/split-shot-of-whale.jpg",
    "year": "2016",
    "genre": "Nature",
    "colors": [
      "#bccbd5",
      "#13517b",
      "#80acc5",
      "#78a2c4",
      "#081931"
    ],
    "dimensions": {
      "height": 2875,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "body-of-water",
    "artist": "Jeremy Bishop",
    "name": "Body of Water",
    "imageSource": "https://example-apis.vercel.app/assets/art/body-of-water.jpg",
    "year": "2017",
    "genre": "Nature",
    "colors": [
      "#203f4a",
      "#9ca1a5",
      "#2d738d",
      "#3a8bb1",
      "#74a5bf"
    ],
    "dimensions": {
      "height": 2880,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "man-digital-illustration",
    "artist": "Francesco Ungaro",
    "name": "Man Digital Illustration",
    "imageSource": "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
    "year": "2006",
    "genre": "Modern Art",
    "colors": [
      "#3d803b",
      "#073204",
      "#c5dedb",
      "#90b59f",
      "#afc6b5"
    ],
    "dimensions": {
      "height": 2581,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "woman-statue",
    "artist": "Zack Jarosz",
    "name": "Woman Statue",
    "imageSource": "https://example-apis.vercel.app/assets/art/woman-statue.jpg",
    "year": "2017",
    "genre": "Classics",
    "colors": [
      "#161616",
      "#c9c8c5",
      "#6b6a69",
      "#8c8c89",
      "#8c848c"
    ],
    "dimensions": {
      "height": 2880,
      "width": 1920,
      "type": "jpg"
    }
  },
  {
    "slug": "majestic-greek-sculpture",
    "artist": "Rachel Claire",
    "name": "Majestic Greek Sculpture",
    "imageSource": "https://example-apis.vercel.app/assets/art/majestic-greek-sculpture.jpg",
    "year": "2019",
    "genre": "Classics",
    "colors": [
      "#978e8b",
      "#2a201e",
      "#483833",
      "#d8d5d8",
      "#53443b"
    ],
    "dimensions": {
      "height": 2880,
      "width": 1920,
      "type": "jpg"
    }
  }
] */

export default function App({ Component, pageProps }) {
  // Variables in React we use, useState
  const [artList, setArtlist] = useState(dataInit);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artList={artList} />
      </Layout>
    </>
  );
}
