import { useForm } from "react-hook-form";
import Button from "emerald-ui/lib/Button";
import Icon from "emerald-ui/lib/Icon";
import Input from "./Input";
import { INPUT, CHILD_OBJECT, CHILD_ARRAY } from "./constants";

import "./styles.scss";
import { Fragment, useCallback, useState } from "react";

export const FormBuilder = ({
  fields,
  isChildren = false,
  stackParent = "",
  controlParent = null,
}) => {
  const { control, handleSubmit } = useForm();
  const [_state, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const currentParent = stackParent ? stackParent : "";
  const currentControl = controlParent ? controlParent : control;

  const renderField = (field, _index, control) => {
    const { key, type, className, fields } = field;

    if (INPUT.includes(type)) {
      const fieldStack = currentParent ? `${currentParent}.${key}` : key;

      return (
        <Input
          key={key}
          keyField={fieldStack}
          className={className}
          control={control}
        />
      );
    }

    if (type === CHILD_OBJECT) {
      const fieldStack = `${currentParent}.${key}`;

      return (
        <FormBuilder
          key={key}
          isChildren
          fields={fields}
          stackParent={fieldStack}
          controlParent={currentControl}
        />
      );
    }

    if (type === CHILD_ARRAY) {
      const renderFields = fields.map((fields, index) => {
        return (
          <div key={`${key}-${Math.random()}`} className="col-xs-12">
            <div className="fieldset">
              <div className="row">
                <div className="col-xs-12">
                  <h4>{index + 1}</h4>
                </div>
                <FormBuilder
                  isChildren
                  fields={fields}
                  stackParent={`${currentParent}.${key}.${index}`}
                  controlParent={currentControl}
                />
              </div>
            </div>
          </div>
        );
      });

      return (
        <div key={key} className="col-xs-12">
          <div className="fieldset">
            <div className="row">
              <div className="col-xs-12">
                <h3>{key}</h3>
              </div>
              {renderFields}
              <div className="col-xs-offset-10 col-xs-2">
                <Button
                  onClick={() => {
                    const arrayCloned = Object.assign(
                      [],
                      fields[fields.length - 1]
                    );
                    fields.push(arrayCloned);
                    forceUpdate();
                  }}
                  color="info"
                  className="generic-button"
                >
                  Add item
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  if (isChildren) {
    return (
      <Fragment>
        {fields.map((field, index) =>
          renderField(field, index, currentControl)
        )}
      </Fragment>
    );
  }

  return (
    <form
      className="row"
      onSubmit={handleSubmit((data) =>
        alert(JSON.stringify(data, null, 2))
      )}
    >
      <div className="col-xs-12">
        <div className="row">
          {fields.map((field, index) =>
            renderField(field, index, currentControl)
          )}
        </div>
      </div>
      <div className="col-xs-offset-10 col-xs-2">
        <Button type="submit" color="info" className="generic-button">
          Submit form
        </Button>
      </div>
    </form>
  );
};

export default FormBuilder;
