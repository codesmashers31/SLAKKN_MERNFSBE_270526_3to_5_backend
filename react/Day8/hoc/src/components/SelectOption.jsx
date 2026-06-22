

const SelectOption = ({arr}) => {
    console.log(arr);
    
  return (
    <div>
      <select>
        {arr.map((e,i)=>(
            <option value={e} key={i}>{e}</option>
        ))}
        
        
      </select>
    </div>
  )
}

export default SelectOption
