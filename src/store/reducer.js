import { SHOW_LIST } from "./actions";

const INITIAL_STATE = {
  status: "INITIAL",
  messages: [
    {
      id: 1000,
      title: "Saepe ut cupiditate.",
      body:
        "Magni vitae esse quia. Autem iusto magnam neque consequuntur consequatur natus et. Culpa aut eos sit placeat dolor temporibus non tempora. Consequuntur minima numquam assumenda amet. Dolores laboriosam aut omnis reprehenderit nostrum nihil ex enim animi.",
      firstName: "Thomas",
      createdAt: "2020-04-08T08:26:41.533Z",
      updatedAt: null,
    },
    {
      id: 1001,
      title: "Incidunt perspiciatis et est qui.",
      body:
        "Omnis iusto tempora est et laborum. Distinctio sunt quis iusto reiciendis et dolores nisi. Dolorum voluptatum facilis suscipit sed repellendus repellat. Officia molestiae veritatis.",
      firstName: "Britt",
      createdAt: "2020-04-08T08:26:41.533Z",
      updatedAt: null,
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LIST:
      return state;
  }
  return state;
};

export default reducer;
