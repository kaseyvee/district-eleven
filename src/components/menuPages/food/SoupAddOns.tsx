function SoupAddOns({ addOns }: any) {
  // const addOnsList = addOns.map((addOn: { name: string }) => {
  //   return (
  //     <li key={addOn.name}>
  //       <p>+ {addOn.name}</p>
  //     </li>
  //   );
  // });

  return (
    <div className="soup-add-ons">
      <header>
        <h3>Soup Add-ons</h3>
        <span>+ 2</span>
      </header>
      <ul>
        {/* {addOnsList} */}
        <li>
          <p>+ extra meat</p>
        </li>
        <li>
          <p>+ vietnamese ham</p>
        </li>
        <li>
          <p>+ sub udon noodles</p>
        </li>
      </ul>
    </div>
  );
}

export default SoupAddOns;
