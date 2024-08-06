import styled from "styled-components";
import { useRouter } from "next/router";

const StyledFormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px;
  margin: 20px 30px 50px;
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
      alert("Please select at least one category.. ");
      return false;
    }
    onSubmit(newActivity);
    router.push("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledFormFieldset>
          <legend>Add new Activity</legend>
          <label htmlFor="title">Title: </label>
          <StyledInputs
            id="title"
            name="title"
            type="text"
            placeholder="Please choose title.."
            maxLength="30"
            required
          ></StyledInputs>
          <label htmlFor="image">ImageUrl: </label>
          <StyledInputs
            id="imageUrl"
            name="imageUrl"
            type="text"
            defaultValue="https://images.unsplash.com/photo-1648167538185-d957d3caf393?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <label htmlFor="description">Description: </label>
          <StyledTextarea
            id="description"
            name="description"
            placeholder="Please choose description.."
            maxLength="150"
          ></StyledTextarea>
          <StyledFieldset>
            <legend>Please select your categories</legend>
            <section>
              <input
                type="checkbox"
                id="water"
                name="categoryIds"
                value="113"
              />
              <label htmlFor="water">Water</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="nature"
                name="categoryIds"
                value="114"
              />
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
              <input
                type="checkbox"
                id="winter"
                name="categoryIds"
                value="116"
              />
              <label htmlFor="winter">Winter</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="adventure"
                name="categoryIds"
                value="115"
              />
              <label htmlFor="adventure">Adventure</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="sport"
                name="categoryIds"
                value="112"
              />
              <label htmlFor="sport">Sport</label>{" "}
            </section>
          </StyledFieldset>
          <label htmlFor="area">Area: </label>
          <StyledInputs
            id="area"
            name="area"
            type="text"
            placeholder="Please choose area.."
            maxLength="30"
          ></StyledInputs>
          <label htmlFor="country">Country: </label>
          <StyledInputs
            id="country"
            name="country"
            type="text"
            placeholder="Please choose a country.."
            maxLength="30"
          ></StyledInputs>
          <button type="submit">Submit</button>
        </StyledFormFieldset>
      </form>
    </>
  );
}
