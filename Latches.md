# Latch
A latch is an asynchronous device with exactly 2 stable state.
Latches are used to hold information in place and thus used as a memory device as long as th device is powered.
Latches are very similar to flip-flops, but are not synchronous  and do not operate on clock edges as flip-flops do.
Moreover, Latches are level sensitive whereas Flip-Flops are edge sensitive.

#### SR(Set/Reset) Latch
It works independently of control signals and relies only on S and R input state.
SR Latch is a circuit with:
<p>(i) 2 cross-coupled NOR gate or 2 cross-coupled NAND gate.</p>
<p>(ii) 2 input S for SET and R for RESET.</p>
<p>(iii) 2 output Q, Q’</p>
<p>(iv) 2 Memory M1 , M2</p>
<br/>

| Q  |  Q' | State  |
| :------------: | :------------: | :------------: |
|  1  |  0   |    Set   |
|  0  |  1   |  Reset |

Under normal conditions, both the input remains 0.
##### Case 1 (Set state)
<p>&nbsp; &nbsp;(i) Inputs : S = 0 &amp; R = 1<br />&nbsp; &nbsp;
(ii) Outputs : Q = 1 &amp; Q&rsquo; = 0<br /><br /></p>

##### Case 2 (Reset state)
<p>&nbsp; &nbsp;(i) Inputs : S = 1 &amp; R = 0<br />&nbsp; &nbsp;(ii) Outputs : Q = 0 &amp; Q&rsquo; = 1<br /><br /></p>

##### Case 3 (S=R=1)(Set / Reset)

###### Case 3.1
<p>&nbsp; &nbsp;(i) Inputs : S = 1 &amp; R = 1 ( and M1 = 1 &amp; M2 = 0 )<br />&nbsp; &nbsp;(ii) Outputs : Q = 0 &amp; Q&rsquo; = 1</p>

###### Case 3.2
<p>&nbsp; &nbsp;(i) Inputs : S = 1 &amp; R = 1 ( and M1 = 0 &amp; M2 = 1 )<br />&nbsp; &nbsp;(ii) Outputs : Q = 1 &amp; Q&rsquo; = 0</p>

##### Case 4 (S=R=0)(Not allowed)
<p>&nbsp; &nbsp;(i) Inputs : S =0 &amp; R = 0<br />&nbsp; &nbsp;(ii) Outputs : Q = 1 &amp; Q&rsquo; =1</p>
<br/>

<iframe width="600px" height="400px" src="https://circuitverse.org/users/4909/projects/13774" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
