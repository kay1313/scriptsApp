/* eslint-disable */
const scriptCreateDtoInType = shape({
  name: string(200).isRequired(),
  body: string().isRequired(),
  dtoInSchema: array(),
  tokens: array()
})

const scriptGetDtoInType = shape({
  id: id().isRequired(),
});

const scriptListDtoInType = shape({
});

const scriptUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200),
  body: string().isRequired(),
  dtoInSchema: array(),
  tokens: array()
});

const scriptDeleteDtoInType = shape({
  id: id().isRequired(),
});

