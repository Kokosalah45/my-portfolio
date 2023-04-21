---
title: "Struct Embedding"
description: ""
---

# Struct Embedding

**Kindly see the Interface Composition Page as this is a continuation of that page [Here](interface-composition)**

Let’s Remember the current state of our program until now

```go
type Saucier interface {
 Saute(name string) bool
}
type Griller interface {
 Grill(name string) bool
}
type Fryer interface {
 Fry(name string) bool
}
type Patisserie interface{
 Bake(name string) bool
}
type Roaster interface{
 Roast(name string) bool
}

type FryerGriller interface {
 Griller
 Fryer
}

func fryingStation(f Fryer){
 f.Fry()
}

func grillingStation(g Griller){
 g.Grill()
}

func fryAndGrillAtTheSameTime(fg FryerGriller){
  //concept of channels is not covered here however imagine that they are
  // happening in parallel
  fryingStation(fg)
  grillingStation(fg)
  // will work as fg is both a Fryer type and Griller Type
}

```

---

## Implementing the Fry method

to be able to use the frying station “fryingStation(f Fryer)” the type must have the “Fry()” function

Let’s say i have 3 types of staff that can use the fryting station so:

```go
type staffType1 struct {
 Name string
 UniquePropertyX int
}

type staffType2 struct {
 Name string
 UniquePropertyY int
}

type staffType3 struct {
 Name string
 UniquePropertyZ int
}

func (s staffType1) Fry(name string) bool {
 // fry
}
func (s staffType2) Fry(name string) bool {
 // fry
}
func (s staffType3) Fry(name string) bool {
 // fry
}
```

---

Now all staff members that can fry have the Fry method so they are eligble to use the FryingStation

```go
fryingStation(staffType1{}) // Works
fryingStation(staffType2{}) // Works
fryingStation(staffType3{}) // Works
```

This code is completely vaild as all of them HOWEVER There’s 2 flaws here

1. the property “name” is getting duplicated everytime i create a new Type
2. all of them implement Fry as they all need to use the frying station and that’s another duplication

**Now the Question :**

- Can we remove all that duplication ?

- What happens if i want to add new types the use the frying station ?

- What if i want to create types that can grill and fry do i have to duplicate all of that ?

....And Here Comes **Struct Embedding 🥳 🥳 🥳 !!!**

---

### Struct Embedding In Action

now all staff members have common traits let’s think for a while

they all have

1. Ethnicity
2. Gender
3. Age
4. Name (Of couse 🤓)

So i can Create StaffBase struct to embed in all types that qualifies as staff🤓🤓🤓

```go
type StaffBase struct {
 Name string
 Gender string
 Age int
 Ethinicty string
}
```

Now let’s Update our Current Code

```go
type staffType1 struct {
 StaffBase
 UniquePropertyX int
}

type staffType2 struct {
 StaffBase
 UniquePropertyY int
}

type staffType3 struct {
 StaffBase
 UniquePropertyZ int
}

func (s staffType1) Fry(name string) bool {
 // fry
}
func (s staffType2) Fry(name string) bool {
 // fry
}
func (s staffType3) Fry(name string) bool {
 // fry
}
```

Nice !!!

NOW they all implement the Fry Method to be able to use the Frying Station

IK !! i can create a struct named staffFryer that implements the Fry method and i can use it any where

```go
type StaffFryer struct { //no fields }

func (s StaffFryer) Fry(name string) bool {
 // fry
}
}
```

No let’s Update our Current Code again

```go
type staffType1 struct {
 StaffBase
 StaffFryer
 UniquePropertyX int
}

type staffType2 struct {
 StaffBase
 StaffFryer
 UniquePropertyY int
}

type staffType3 struct {
 StaffBase
 StaffFryer
 UniquePropertyZ int
}
```

Extra NICE !!!

Now i can do this

```go
fryingStation(staffType1{}) // Also Works
fryingStation(staffType2{}) // Also Works
fryingStation(staffType3{}) // Also Works
```

---

Now I want staffType2 to be also a Griller and as we said previously a griller is the one that can use the grilling station

```go
type StaffGriller struct { //no fields }

func (s StaffGriller) Grill(name string) bool {
 // fry
}
```

Now let’s Update our Current Code again

```go
type staffType1 struct {
StaffBase
StaffFryer
UniquePropertyX int
}

type staffType2 struct {
 StaffBase
 StaffGriller
 StaffFryer
 UniquePropertyY int
}

type staffType3 struct {
 StaffBase
 StaffFryer
 UniquePropertyZ int
}
}
```

Now i can do this

```go
grillingStation(staffType2{}) // Works
```

and also this

```go
fryAndGrillAtTheSameTime(staffType2{})
```
