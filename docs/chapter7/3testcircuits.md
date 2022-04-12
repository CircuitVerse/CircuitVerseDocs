# Testing CircuitVerse circuits

The Testbench helps you test your circuits in the simulator itself

### It's here in this corner

![drawing](../images/img_chapter7/location.jpg)

### Attach a test to a circuit
Each circuit in a project can be attached a test, this test is saved along with your circuits. So the next time you load your circuit, the test loads with it.

![drawing](../images/img_chapter7/click_attach.png)

### Create the test using the test creator
The test creator provides an intuitive UI to create tests.
 - Select the type of test - `Sequential` or `Combinational`
 - Add inputs / outputs by clicking the `+` icon next to `INPUTS` / `OUTPUTS` label.
 - Add another test to the group by clicking `+` icon below
 - Add another group by clicking `New Group`

For sequential tests, clock is ticked between each Group. For combinational tests, Groups are just a logical seperation between different types of tests.

Alternatively, you can also export the created test as CSV and edit it. You can import this CSV to attch by clicking `Import from CSV`

Finally,
 - Save and attach the test by clicking `Attach`

![drawing](../images/img_chapter7/make_test.png)

### Label your circuit elements
The testbench uses the element labels to identify Input and Output elements. So make sure they are labelled the same as that in the tests.

Click `Validate` to make sure you have added all elements properly

![drawing](../images/img_chapter7/name_elements.png)

### Ready to go!
Click the arrows next to Group / Test number to scroll through and run tests

![drawing](../images/img_chapter7/manual.png)

Click `Run All` to run all the tests in an instant

![drawing](../images/img_chapter7/runall.png)

And get detailed results!

![drawing](../images/img_chapter7/detailed.png)
