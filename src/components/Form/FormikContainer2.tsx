import React, {useEffect, useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { useDispatch, useSelector } from 'react-redux';
import { addBird } from '../../store/actions/birdAction2';
import { RootState } from '../../store/store';

function FormikContainer () {
  const dispatch = useDispatch();
  const selectedBirdName= useSelector((state: RootState)=> state.testBirds2);

  function handleBirdSelection(setFieldValue: (field: string, value: any, shouldValidate: boolean) => void ) {
    console.log(selectedBirdName[selectedBirdName.length-1].name2)
    setFieldValue('selectOption', selectedBirdName[selectedBirdName.length-1].name2, false);
  }

  function handleBirdSizeSelection(setFieldValue: (field: string, value: any, shouldValidate: boolean) => void ) {
    console.log(selectedBirdName[selectedBirdName.length-1].size)
    setFieldValue('selectBirdSizeOption', selectedBirdName[selectedBirdName.length-1].size, false);
  }

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Bluejay', value: 'bluejay' },
    { key: 'Robin', value: 'robin' },
    { key: 'Sparrow', value: 'sparrow' }
  ]

  const dropdownBirdSizeOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Small', value: 'small' },
    { key: 'Medium', value: 'medium' },
    { key: 'Large', value: 'large' }
  ]

  const initialValues = {
    selectOption: '',
    selectBirdSizeOption: ''
  }
  const validationSchema = Yup.object({
    selectOption: Yup.string().required('Required'),
    selectBirdSizeOption: Yup.string().required('Required'),
  })
  const onSubmit = values => {
    dispatch(addBird(values.selectOption));
    dispatch(addBird(values.selectBirdSizeOption));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({values, errors, setFieldValue}) => (
        <Form>
            {
              useEffect(() => {
                if(selectedBirdName){
                  handleBirdSelection(setFieldValue);
                  handleBirdSizeSelection(setFieldValue);
                }
              }, [selectedBirdName])
            }
            <br/>
          <FormikControl
            control='select'
            label='Select a bird'
            name='selectOption'
            options={dropdownOptions}
          />
            <br/>
          <FormikControl
            control='select'
            label='Select a bird size'
            name='selectBirdSizeOption'
            options={dropdownBirdSizeOptions}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
