import { render, screen, fireEvent } from '@testing-library/react'
import { LanguagePicker} from '../LanguagePicker'

describe('LanguagePicker', () => {

    test('Should change the language when the language is changed from the dropdown menu ', async () => {
        render(<LanguagePicker/>)
        const LanguageElement = screen.getByTestId("LanguageSwitch")
        fireEvent.change(LanguageElement, {target: {value: "da"}})
        expect(LanguageElement.value).toBe("da")

        fireEvent.change(LanguageElement, {target: {value: "en"}})
        expect(LanguageElement.value).toBe("en")
    })
})