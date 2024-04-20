/* eslint-disable */
const scriptCreateDtoInType = shape({
  name: string(200).isRequired(),
  creator: string(15).isRequired(),
  groups: array(),
  body: string().isRequired(),
  dtoInSchema: array(),
  tokens: array()
})

const scriptGetDtoInType = shape({
  id: id().isRequired(),
});

const scriptListDtoInType = shape({
  creator: string(15),
  groups: array(),
});

const scriptUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200),
  creator: string(15),
  groups: array(),
  body: string().isRequired(),
  dtoInSchema: array(),
  tokens: array()
});

const scriptDeleteDtoInType = shape({
  id: id().isRequired(),
});

