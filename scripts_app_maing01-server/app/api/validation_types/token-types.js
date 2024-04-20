/* eslint-disable */
const tokenCreateDtoInType = shape({
  name: string(200).isRequired(),
  creator: string(15).isRequired(),
  groups: array(),
  type: boolean().isRequired(),
  value: array()
})

const tokenGetDtoInType = shape({
  id: id().isRequired(),
});

const tokenListDtoInType = shape({
  creator: string(15),
  groups: array(),
});

const tokenUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200).isRequired(),
  creator: string(15).isRequired(),
  groups: array(),
  type: boolean().isRequired(),
  value: array()
});

const tokenDeleteDtoInType = shape({
  id: id().isRequired(),
});

