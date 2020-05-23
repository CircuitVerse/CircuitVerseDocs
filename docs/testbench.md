# Test Bench

> This guide will teach you how to write test benches and use test bench on [CircuitVerse](https://circuitverse.com/simulator)


Test Bench are used to simulate your designs. These are generally used for automated testing of your circuits. 

### Creating a test bench

CircuitVerse provides an easy way of creating a test bench. Here we will try to make a test bench for testing our very own AND Gate.

* Go to <https://circuitverse.org/testbench>.

  You are welcomed with this screen.

![](images\testbench\welcome.png)

* **Add input** as the name suggests is used for input. As our AND Gate has 2 inputs, Let us add 2 input.

  ![](images\testbench\input.png)

  You may want to change the Label of the inputs. In order to do so change that simply click on the box where inp1 is written and you will now be able to change the label for your input. Also, note the color of your input box is purple while that of output will be light green.

  The **Label** is used to label your input and outputs whereas **BitWidth** is used to specify the number of Bits For your input and output.

* **Add output** as the name suggest is used to denote the output of your circuits. In our case, the AND Gate has a single output. So, we shall only add one output to our test bench.

  ![](images\testbench\output.png)

* **Add Case** is used write down your test cases. This is where you specify the various test cases in order to stimulate your circuit. For testing our AND Gate I will add the truth table of AND Gate as our test cases. *Click* on the *Add Case* button to add test cases.

  ![](images\testbench\test_cases.png)

* **Generate Data** generates a JSON file which is later used to test your circuit. You may also use **Load Data** to load JSON data of your own to look at how your Test bench looks like.

  ![](images\testbench\Test_JSON.png)

  Since we have successfully created our test bench now let us use it to test our AND Gate in the [simulator](https://circuitverse.org/simulator)

  

### Testing the circuit

1. In the [simulator](https://circuitverse.org/simulator) go to the Test Bench Tab and drag both the TB_input and TB_output onto the canvas.

2. Double click on the TB_input and paste the Generated Data into the dialog box and click on OK.

   ![](images\testbench\enter_JSON.png)

3. Connect the inputs of TB_input with your circuit input points and output with your circuit output points and provide a clock input to TB_input. As you can see the TB_input displays its status as *Not Running*

   ![](images\testbench\test_circuit.png)

4. To change the status of TB_input block and go to the Properties Tab, situated on the bottom left corner and click on *Toggle State*
   ![](images\testbench\toggle_state.png)

5. Once you Click on Toggle State the Test Case you defined earlier on [test bench](https://circuitverse.org/testbench) starts running.

   [filename](/video/test_bench.mp4 ':include :type=video ')

6. The *Reset Iterations* runs the test cases from beginning.



### Checking Errors

Whenever you run your test bench the TB_out always displays output in 2 columns as seen in the figure below.

| Actual Output | Expected output |
| ------------- | --------------- |
| 1             | 0               |

![](images\testbench\TB_out.png)

When the actual output is written in red, it means the output produced by the circuit is not equal to the expected value. Thus there might be some errors in your design. But Sometimes, as in this example, though the input values 1,1 in AND gate produces an output of 1, it is shown wrong. This is because my test case looks like this: 

![](images\testbench\wrong_test_case.png)

Here I have provided a wrong test case in case 2 which is responsible for this unexpected behavior. So you must always recheck your test cases before using it in order to correctly simulate your circuit.
