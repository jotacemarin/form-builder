export const RAW_JSON_CUSTOM_RULE = {
  field: "NUMBER",
  default: {
    value: "STRING",
  },
  conditions: [
    {
      success: {
        field: "NUMBER",
      },
      operator: "STRING",
      condition: {
        value: ["STRING"],
      },
    },
  ],
};

export const FORM_JSON_CUSTOM_RULE = [
  {
    key: "field",
    type: "NUMBER",
    className: "col-xs-6"
  },
  {
    key: "default",
    type: "CHILD_OBJECT",
    fields: [
      {
        key: "value",
        type: "STRING",
        className: "col-xs-6"
      },
    ],
  },
  {
    key: "conditions",
    type: "CHILD_ARRAY",
    fields: [
      [
        {
          key: "success",
          type: "CHILD_OBJECT",
          fields: [
            {
              key: "field",
              type: "NUMBER",
              className: "col-xs-4"
            },
          ],
        },
        {
          key: "operator",
          type: "STRING",
          className: "col-xs-4"
        },
        {
          key: "condition",
          type: "CHILD_OBJECT",
          fields: [
            {
              key: "value",
              type: "STRING",
              className: "col-xs-4"
            },
          ],
        },
      ],
    ],
  },
];
