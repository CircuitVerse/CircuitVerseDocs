# Document Output Elements
The **HTML Output element**  `<output>` is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.

**Content categories** |Flow content, phrasing content, listed, labelable, resettable form associated element, palpable content
---|---
**Permitted content**  |Phrasing content
**Tag omission** | None, both the starting and ending tag are mandatory.
**Permitted parents** | Any element that accepts phrasing content.
**Permitted ARIA roles** | Any
**DOM interface** | HTMLOutputElement

# Attributes

This element includes the `global attributes`.

**For**
A space-separated list of other elements’ ids, indicating that those elements contributed input values to (or otherwise affected) the calculation.

**Form**
The `form element` that this element is associated with (its "form owner") . The value of the attribute must be an `id` of a form element in the same document. This attribute is not needed if the output element is a descendant of a form element or not associated with a form element.

**Name**
The name of the element, exposed in then HtmlFormElement `API`

**Example**
This form provides a slider whose value can range between 0 and 100. and an `<input>` element into which you can enter a second number. The two numbers are added together and the result is displayed in the `<output>` element each time the value of any of the controls changes.
``` html
<form input="result.value=parseInt(a.value)+parseInt(b.value)">
 `<input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="result">60</output>
</form>
```