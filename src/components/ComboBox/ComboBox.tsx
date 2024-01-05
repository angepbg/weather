import React, { useRef, useState, useEffect, FunctionComponent, ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { List } from './List'
import { Select } from './Select'
import { ItemType, ComboBoxType } from './ComboBox.interface'
import { WrapperComboBox } from './styles'
import { MOCK_CITIES } from '../../constants/cities'
import { resetWeatherDataRequest } from '../../redux/weather/actions'

export const ComboBox: FunctionComponent<ComboBoxType> = ({
  currentLocation,
  optionSelected,
  setOptionSelected,
}): ReactElement => {
  const dispatch = useDispatch()

  const COMBO_BOX_REF = useRef<HTMLDivElement>(null)
  const [withList, setWithList] = useState<boolean>(false)

  useEffect(() => {
    const handleEventWindowClick = ({ target }: any): void => {
      if (COMBO_BOX_REF.current && !COMBO_BOX_REF?.current?.contains(target)) {
        setWithList(false)
      }
    }
    window.addEventListener('click', handleEventWindowClick)
    return () => window.removeEventListener('click', handleEventWindowClick)
  }, [COMBO_BOX_REF])

  const handleSelectClick = () => {
    setWithList(true)
  }

  const handleOptionSelectedClick = (item: ItemType) => {
    setWithList(false)
    setOptionSelected(item)
    dispatch<any>(resetWeatherDataRequest())
  }

  const cities = [currentLocation, ...MOCK_CITIES]

  return (
    <WrapperComboBox ref={COMBO_BOX_REF} datatest-id="combo-box">
      <Select
        listIsOpen={withList}
        data-testid="select-input"
        optionSelected={optionSelected}
        handleSelectClick={handleSelectClick}
      />
      {withList && (
        <List
          items={cities}
          data-testid="list-select"
          optionSelectedId={optionSelected?.id}
          handleOptionSelectedClick={handleOptionSelectedClick}
        />
      )}
    </WrapperComboBox>
  )
}
