function DietTable({ diets }: any) {

  const dietsList = diets.map(
    (diet: { dietaryType: string; image: string }) => {
      return (
        <li key={diet.dietaryType + "diet list"}>
          <img
            src={diet.image}
            alt={diet.dietaryType + " icon"}
            width={20}
            height={20}
          />
          <p>{diet.dietaryType}</p>
        </li>
      );
    }
  );

  return (
    <ul className="diet-table" aria-label="dietary restriction icon legend">
      {dietsList}
    </ul>
  );
};

export default DietTable;
