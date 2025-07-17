import './App.css'
import {componentTypes, FormRenderer} from "@data-driven-forms/react-form-renderer";
import {componentMapper} from "@data-driven-forms/mui-component-mapper";
import MUIFT from "@data-driven-forms/mui-component-mapper/form-template"

function App() {

    const schema = {
      fields: [
          {
              name: 'test',
              component: componentTypes.TEXT_FIELD,
              validate: [
                  (value: string) => 'value: ' + value
              ]
          }
      ]
    }

  return (
    <>
      <div>
          <h1>Test</h1>
        <FormRenderer FormTemplate={MUIFT} schema={schema} componentMapper={componentMapper} />
      </div>
    </>
  )
}

export default App
