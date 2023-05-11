import ArtistInformation from "../components/ArtistInformation";

export default function Favorites({
  favArtistInformation,
  ArtistInformation,
  onHandleArtistInformation,
}) {
  return (
    <>
      <h1>Favorites</h1>
      <ArtistInformation
        data={favArtistInformation}
        ArtistInformation={ArtistInformation}
        onHandleArtPieceInfo={onHandleArtistInformation}
      />
    </>
  );
}
