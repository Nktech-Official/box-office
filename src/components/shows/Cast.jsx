export default function Cast({ cast }) {
  return (
    <div>
      {cast.map(item => {
        const { person, character, voice } = item;
        return (
          <div key={person.id}>
            <div>
              <img
                src={
                  person.image ? person.image.medium : '/image-not-found.png'
                }
                alt={item.person.name}
              />
            </div>
            <div>
              {person.name} | {character.name} {voice && '| Voiceover'}
            </div>
          </div>
        );
      })}
    </div>
  );
}
