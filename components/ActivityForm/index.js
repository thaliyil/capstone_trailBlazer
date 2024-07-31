import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px;
`;

const StyledUlForm = styled.ul``;

const StyledListForm = styled.li`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const StyledInputs = styled.input`
  padding: 10px;
  margin: 10px;
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  margin: 10px;
`;

export default function ActivityForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const newActivity = Object.fromEntries(formElements);

    newActivity.categoryIds = formElements.getAll("categoryIds");

    onSubmit(newActivity);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <StyledInputs
          id="title"
          name="title"
          type="text"
          placeholder="Please choose title.."
          required
        ></StyledInputs>
        <label htmlFor="description">Description: </label>
        <StyledTextarea
          id="description"
          name="description"
          type="text"
          placeholder="Please choose description.."
          cols="10"
        ></StyledTextarea>
        <button type="button">Please select categories</button>
        <StyledUlForm>
          <StyledListForm>
            <input type="checkbox" id="water" name="categoryIds" value="113" />
            <label htmlFor="water">Water</label>
          </StyledListForm>
          <StyledListForm>
            <input type="checkbox" id="nature" name="categoryIds" value="114" />
            <label htmlFor="nature">Nature</label>
          </StyledListForm>
          <StyledListForm>
            <input
              type="checkbox"
              id="outdoor"
              name="categoryIds"
              value="111"
            />
            <label htmlFor="outdoor">Outdoor</label>
          </StyledListForm>
          <StyledListForm>
            <input type="checkbox" id="winter" name="categoryIds" value="116" />
            <label htmlFor="winter">Winter</label>
          </StyledListForm>
          <StyledListForm>
            <input
              type="checkbox"
              id="adventure"
              name="categoryIds"
              value="115"
            />
            <label htmlFor="adventure">Adventure</label>
          </StyledListForm>
          <StyledListForm>
            <input type="checkbox" id="sport" name="categoryIds" value="112" />
            <label htmlFor="sport">Sport</label>
          </StyledListForm>
        </StyledUlForm>
        <label htmlFor="area">Area: </label>
        <StyledInputs
          id="area"
          name="area"
          type="text"
          placeholder="Please choose area.."
        ></StyledInputs>
        <label htmlFor="country">Country: </label>
        <StyledInputs
          id="country"
          name="country"
          type="text"
          placeholder="Please choose a country.."
        ></StyledInputs>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </StyledForm>
    </>
  );
}
