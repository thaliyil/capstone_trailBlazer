import styled from "styled-components";
import { useRouter } from "next/router";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px;
  padding: 30px;
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
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const newActivity = Object.fromEntries(formElements);
    newActivity.categoryIds = formElements.getAll("categoryIds");

    if (newActivity.categoryIds.length === 0) {
      alert("please select at least one category.. ");
      return false;
    }
    onSubmit(newActivity);
    router.push("/");
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
          placeholder="Please choose description.."
        ></StyledTextarea>
        <StyledFieldset>
          <legend>Please select your categories</legend>
          <section>
            <input type="checkbox" id="water" name="categoryIds" value="113" />
            <label htmlFor="water">Water</label>
          </section>
          <section>
            <input type="checkbox" id="nature" name="categoryIds" value="114" />
            <label htmlFor="nature">Nature</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="outdoor"
              name="categoryIds"
              value="111"
            />
            <label htmlFor="outdoor">Outdoor</label>
          </section>
          <section>
            <input type="checkbox" id="winter" name="winter" value="116" />
            <label htmlFor="winter">Winter</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="adventure"
              name="adventure"
              value="115"
            />
            <label htmlFor="adventure">Adventure</label>
          </section>
          <section>
            <input type="checkbox" id="sport" name="categoryIds" value="112" />
            <label htmlFor="sport">Sport</label>{" "}
          </section>
        </StyledFieldset>
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
      </StyledForm>
    </>
  );
}
