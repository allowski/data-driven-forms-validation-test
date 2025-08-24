import './App.css'
import {componentTypes, FormRenderer} from "@data-driven-forms/react-form-renderer";
import {componentMapper} from "@data-driven-forms/mui-component-mapper";
import MUIFT from "@data-driven-forms/mui-component-mapper/form-template"
import {LoadingExample} from "./LoadingExample.tsx";
import {GameBoard} from "./game/components/game-board.tsx";

const UniqueNameVal = (options: object) => {
    return (value: string, all, meta) => {
        console.log({all});
        const x = all // z.getState();
        if(Array.isArray(x.config)) {
            console.log('is an array :D');
            const matching = x.config.filter((item) => item && item.name === value)
            console.log({matching, len: matching.len});
            if(matching.length > 1){
                return "Invalid name, repeated " + matching.length + "times";
            }
        }
    };
}
function App() {

    const schema = {
      fields: [
          {
              name: 'Name',
              label: 'Name',
              isRequired: true,
              id: 'new test id',
              'data-testid': 'new data test id',
              data: {
                  'testid': 'what?'
              },
              component: componentTypes.TEXT_FIELD,
              validate: [
                  (value: string) => 'value: ' + value
              ]
          },
          {
              name: 'Another Name',
              label: 'Another Name',
              'data-testid': 'new data test id 1',
              component: componentTypes.TEXT_FIELD,
              validate: [
                  (value: string) => 'value: ' + value
              ]
          },
          {
              name: 'config',
              component: componentTypes.FIELD_ARRAY,
              initialValue: [
                  {name: 'test',},
                  {name: 'test',},
                  {name: 'test',},
              ],
              fields: [
                  {
                      name: 'name',
                      component: componentTypes.TEXT_FIELD,
                      validate: [
                          {type: 'unique-name'}
                      ]
                  }
              ]
          }
      ]
    }

  return (
    <>
      <div>
          <GameBoard />
          <h1>Test Application</h1>
          <LoadingExample id={'first'} timeout={2500} />
          <LoadingExample id={'second'} timeout={3500} />
          <LoadingExample id={'last'} timeout={4500} />
           <FormRenderer validatorMapper={{'unique-name': UniqueNameVal}} FormTemplate={MUIFT} schema={schema} componentMapper={componentMapper} />
      </div>
    </>
  )
}

export default App
