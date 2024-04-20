/* eslint-disable */
const groupCreateDtoInType = shape({
  name: string(200).isRequired(),
  members: array()
})

const groupGetDtoInType = shape({
  id: id().isRequired(),
});

const groupListDtoInType = shape({
  name: string(200),
  members: array()
});

const groupUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200),
  members: array()
});

const groupDeleteDtoInType = shape({
  id: id().isRequired(),
});
