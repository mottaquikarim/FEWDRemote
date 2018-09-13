# RPS game psuedo code

## Variables

* player1
* player2

## Assumptions

**ROCK** is represented as "r"
**PAPER** is represented as "p"
**SCISSORS** is represented as "s"

### Attempt 1
```
if p1 is r and p2 is r
	winner is tie
if p1 is r and p2 is p
	winner is p2
if p1 is r and p2 is s
	winner is p1
if p1 is p and p2 is r
	winner is p1
if p1 is p and p2 is p
	winner is tie
if p1 is p and p2 is s
	winner is p2
if p1 is s and p2 is r
	winner is p2
if p1 is s and p2 is p
	winner is p1
if p1 is s and p2 is s
	winner is tie
```

### Attempt 2

Remove all the explicit tie cases and replace with ONE condition, dropping this down to **7** conditionals
```
if p1 is p2
	winner is tie
if p1 is r and p2 is p
	winner is p2
if p1 is r and p2 is s
	winner is p1
if p1 is p and p2 is r
	winner is p1
if p1 is p and p2 is s
	winner is p2
if p1 is s and p2 is r
	winner is p2
if p1 is s and p2 is p
	winner is p1
```

### Attempt 3

We can consolidate all the `p1` vs `p2` outcomes

```
if p1 is p2
	winner is tie
if (p1 is r and p2 is p) OR (p1 is p and p2 is s) OR (p1 is s and p2 is r)
	winner is p2
if (p1 is r and p2 is s) OR (p1 is p and p2 is r) OR (p1 is s and p2 is p)
	winner is p1
```


## Assumptions take 2

**ROCK** is represented as 1
**PAPER** is represented as 2
**SCISSORS** is represented as 3


### Attempt 1

```

if p1 == p2
	winner = tie
if p1 > p2
	winner = p1
	if p1 == 3 and p2 == 1
		winner = p2
else 
	winner = p2
```


### TEST

```
p1 = R = 1
p2 = S = 3

p1 = 3 = S
p2 = 1 = R

```

