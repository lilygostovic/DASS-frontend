interface dropDownProps {
  selectedOption: string
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export const DropDown = ({ selectedOption, setOption }: dropDownProps) => {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "40px",
        width: "190px",
        fontWeight: "bold",
        border: "4px outset #78A6F5",
        backgroundColor: "#3E54AC",
        color: "white",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        borderRadius: "8px",
        fontSize: "19px",
        margin: "20px 25px",
      }}
    >
        <option value="country">Country</option>
        <option value="gender">Gender</option>
        <option value="motive">Asylum Motive</option>
        <option value="lgbtq">LGBTQ</option>
    </select>
  )
}
