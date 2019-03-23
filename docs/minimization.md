# Minimization Techniques

> The process of simplifying the algebraic expression of a boolean function is called minimization. Minimization is important as it reduces the cost and complexity of the circuit. This guide will teach you the various minimization techniques in Boolean Algebra.

Contributing Authors:
[@ritabandatta](https://github.com/Reetoo)

## Boolean Algebra

At first, we need to learn some important laws which are required in boolean algebra.

### AND laws
A.0 = 0
A.1 = A
A.A = A
A.A' = 0

### OR laws
A + 0 = A
A + 1 = 1
A + A = A
A + A' = 1

### Commutative laws
A + B = B + A
A.B = B.A

### Associative laws
(A + B) + C = A + (B + C)
(A.B).C = A.(B.C)

### Distributive laws
A.(B + C) = A.B + A.C
A + B.C = (A + B)(A + C)

### Absorption laws
A + A.B = A
A.(A + B) = A

### De Morgans laws
(A + B)' = A'.B'
(A.B)' = A' + B'

Let us take a look at some examples to learn the technique.

f = (A + (BC)')'(AB' + ABC)
  = (A'BC).A(B' + BC)
  = ((A.A')BC).(B' + BC)
  = 0.(B' + BC)
  = 0

f = ((AB)'.(CD + E'F)((AB)' + (CD)'))'
  = (AB)'' + (CD + E'F)' + ((AB)' + (CD)')'
  = AB + (CD)'.(EF)' + (AB)''.(CD)''
  = AB + (C' + D')(E + F') + ABCD
  = AB(1 + CD) + (C' + D')(E + F')
  = AB + (C' + D')(E + F')

## Karnaugh Map

K-map is a chart or a graph composed of an arrangement of adjacent cells representing a particular combination of variables in SOP or POS form.
A n-variable K-map should contain 2^n cells.

Steps to solve a K-map:
1. Identify minterms or maxterms as given in the problem.
2. For SOP, put 1's in the blocks of K-map respective to the minterms.
3. For POS, put 1's in the blocks of K-map respective to the maxterms.
4. Make rectangular groups containing total terms in power of two like 1,2,4,8 and try to cover as many elements as possible in one group while ensuring that the cells are adjacent to each other.
5. From the groups made in step 4 find the product terms and sum them up for SOP form or find the sum terms and product them up for POS form.

Let us look at an example:

f = Σm(1,3,6,7)

![Alt text](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/K-Map-Karnaugh-Map.png)

From red group we get product term A'C
From green group we get product term AB
Summing up these two variables we get f = A'C + AB
