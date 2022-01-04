import { fireEvent, render, screen } from '@testing-library/react'
import { Start } from '.'
import * as startService from '../../services/startService'

test('given click to button, assert startSomething is called', () => {
  // Arrange
  const mock = jest.spyOn(startService, 'startSomething').mockReturnValue()

  // Act
  render(<Start />)
  fireEvent.click(screen.getByText('Start!'))

  // Assert
  expect(mock).toBeCalledTimes(1)
})
