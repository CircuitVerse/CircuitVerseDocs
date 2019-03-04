                                                           ## Output Elements

 ###HTML <output> Tag
 
   Example

Perform a calculation and show the result in an <output> element:

 <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
  <input type="range" id="a" value="50">100
  +<input type="number" id="b" value="50">
  =<output name="x" for="a b"></output>
</form> 

## Definition

The <output> tag represents the result of a calculation.

###Attributes


   Attribute 	Value 	        Description
   for 	        element_id 	Specifies the relationship between the result of the calculation, and the elements used in the calculation
   form 	form_id 	Specifies one or more forms the output element belongs to
   name 	name 	        Specifies a name for the output element
