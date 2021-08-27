import { getUrlId, getFullName, getInitialName } from "../logicHelper";

describe("getUrlId", () => {
    it("id available", () => {
        expect(getUrlId("https://simple-contact-crud.herokuapp.com/contact", "abcd-efgh")).toBe("https://simple-contact-crud.herokuapp.com/contact/abcd-efgh")
    })
    it("id null", () => {
        expect(getUrlId("https://simple-contact-crud.herokuapp.com/contact", undefined)).toBe("https://simple-contact-crud.herokuapp.com/contact")
    })
})

describe("getFullName", () => {
    it("name available", () => {
        expect(getFullName({ firstName: "Jonas", lastName: 'Edison' })).toBe("Jonas Edison")
    })
})



describe("getInitialName", () => {
    it("name Available", () => {
        expect(getInitialName("Jonas Edison")).toBe('JE')
    })
})
