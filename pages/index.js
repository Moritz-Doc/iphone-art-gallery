import Image from "next/image";
// import { useEffect } from "react";

export default function HomePage({ artList }) {
  console.log("artList: ", artList);

  // we are saving in art the first element of my array artList
  const art = artList[0];
  //We log the art object
  console.log("art: ", art);

  //We log the value of the key artist from our object art
  console.log("Artist Name: ", art.artist);

  console.log("Image url: ", art.imageSource);

  //In the return all variables need to be in between curly brackets {}
  return (
    <>
      <Image
        src={art.imageSource}
        alt={art.artist}
        width={500}
        height={500}
      ></Image>
      <p>{art.artist}</p>
      <p>{art.year}</p>
    </>
  );
}
