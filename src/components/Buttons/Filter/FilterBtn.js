import styled from 'styled-components';

//Style of the filter popular button
export const FilterBtnPopular = styled.button`
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
  color: var(--black);
  background-color: var(--blue);
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 30px;

  &:hover {
    background-color: var(--blue);
    color: var(--black);
  }
`;

//Style of the filter medium button
export const FilterBtnMedium = styled.button`
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
  color: var(--white);
  background-color: var(--black-2);
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 30px;

  &:hover, &:active {
    background-color: var(--blue);
    color: var(--black);
  }
`;

//Style of the filter worst button
export const FilterBtnWorst = styled.button`
  font-family: var(--font-stitle);
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
  color: var(--white);
  background-color: var(--black-2);
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 30px;

  &:hover, &:active{
    background-color: var(--blue);
    color: var(--black);
  }
`;