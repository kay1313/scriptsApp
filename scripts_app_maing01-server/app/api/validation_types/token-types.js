/* eslint-disable */
const tokenCreateDtoInType = shape({
  name: string(200).isRequired(),
  type: boolean().isRequired(),
  value: array()
})

const tokenGetDtoInType = shape({
  id: id().isRequired(),
});

const tokenListDtoInType = shape({
});

const tokenUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200).isRequired(),
  type: boolean().isRequired(),
  value: array()
});

const tokenDeleteDtoInType = shape({
  id: id().isRequired(),
});

