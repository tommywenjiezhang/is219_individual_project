[![Build Status](https://travis-ci.org/tommywenjiezhang/is219_group_project.svg?branch=master)](https://travis-ci.org/tommywenjiezhang/is219_group_project)


[![Coverage Status](https://coveralls.io/repos/github/tommywenjiezhang/is219_group_project/badge.svg?branch=master)](https://coveralls.io/github/tommywenjiezhang/is219_group_project?branch=master)

[![dependencies Status](https://david-dm.org/tommywenjiezhang/is219_group_project/status.svg)](https://david-dm.org/tommywenjiezhang/is219_group_project) [![devDependency Status](https://david-dm.org/tommywenjiezhang/is219_group_project/dev-status.svg)](https://david-dm.org/tommywenjiezhang/is219_group_project?type=dev)

<h1>Individual Project</h1>

<img src="./ClassDigram.png"/>

<h1>Docs</h1>
## Classes

<dl>
<dt><a href="#RandomCalculator">RandomCalculator</a> ⇐ <code><a href="#Calculator">Calculator</a></code></dt>
<dd></dd>
<dt><a href="#Calculator">Calculator</a></dt>
<dd></dd>
<dt><a href="#SamplingCalculator">SamplingCalculator</a> ⇐ <code><a href="#Calculator">Calculator</a></code></dt>
<dd></dd>
</dl>

<a name="RandomCalculator"></a>

## RandomCalculator ⇐ [<code>Calculator</code>](#Calculator)
**Kind**: global class  
**Extends**: [<code>Calculator</code>](#Calculator)  

* [RandomCalculator](#RandomCalculator) ⇐ [<code>Calculator</code>](#Calculator)
    * [.seedRandom()](#RandomCalculator+seedRandom) ⇒ <code>SeedRandom</code>
    * [.seedRandomList()](#RandomCalculator+seedRandomList) ⇒ <code>SeedRandomList</code>
    * [.selectRandom(list, [size])](#RandomCalculator+selectRandom) ⇒ <code>array</code> \| <code>number</code>
    * [.generateRand(min, max, [size])](#RandomCalculator+generateRand) ⇒ <code>array</code> \| <code>number</code>
    * [.Add(a, b)](#Calculator+Add) ⇒ <code>number</code>
    * [.Divide(a, b)](#Calculator+Divide) ⇒ <code>number</code>
    * [.Multiply(a, b)](#Calculator+Multiply) ⇒ <code>number</code>
    * [.sumList(myarray)](#Calculator+sumList) ⇒ <code>number</code>
    * [.square(number)](#Calculator+square) ⇒ <code>number</code>
    * [.squareRoot(a)](#Calculator+squareRoot) ⇒ <code>number</code>

<a name="RandomCalculator+seedRandom"></a>

### randomCalculator.seedRandom() ⇒ <code>SeedRandom</code>
**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>SeedRandom</code> - seed - new Seed  
<a name="RandomCalculator+seedRandomList"></a>

### randomCalculator.seedRandomList() ⇒ <code>SeedRandomList</code>
seed  the data so that the function generates the same random list each time

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>SeedRandomList</code> - new SeedRandomList  
<a name="RandomCalculator+selectRandom"></a>

### randomCalculator.selectRandom(list, [size]) ⇒ <code>array</code> \| <code>number</code>
Select N number of items or Select a random item from a list

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>array</code> \| <code>number</code> - - list of random numbers from list or a random number from list  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>arr</code> | list of numbers to be choosed from |
| [size] | <code>number</code> | desired random numbers size |

<a name="RandomCalculator+generateRand"></a>

### randomCalculator.generateRand(min, max, [size]) ⇒ <code>array</code> \| <code>number</code>
genrates random list or  Generate a random number without a seed between a range of two numbers - Both Integer and Decimal

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>array</code> \| <code>number</code> - - random list of random number or number to be generated  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | min of desired list |
| max | <code>number</code> | max of desired list |
| [size] | <code>number</code> | size of random numbers list to be generated |

<a name="Calculator+Add"></a>

### randomCalculator.Add(a, b) ⇒ <code>number</code>
Returns the sum of two number

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>number</code> - sum  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+Divide"></a>

### randomCalculator.Divide(a, b) ⇒ <code>number</code>
Divides two number

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+Multiply"></a>

### randomCalculator.Multiply(a, b) ⇒ <code>number</code>
Mutiply two number

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+sumList"></a>

### randomCalculator.sumList(myarray) ⇒ <code>number</code>
sum the lists of numbers

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>number</code> - sum  

| Param | Type | Description |
| --- | --- | --- |
| myarray | <code>array</code> | list of number |

<a name="Calculator+square"></a>

### randomCalculator.square(number) ⇒ <code>number</code>
Square a number

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | to be square |

<a name="Calculator+squareRoot"></a>

### randomCalculator.squareRoot(a) ⇒ <code>number</code>
Sqaure root of number

**Kind**: instance method of [<code>RandomCalculator</code>](#RandomCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 

<a name="Calculator"></a>

## Calculator
**Kind**: global class  

* [Calculator](#Calculator)
    * [.Add(a, b)](#Calculator+Add) ⇒ <code>number</code>
    * [.Divide(a, b)](#Calculator+Divide) ⇒ <code>number</code>
    * [.Multiply(a, b)](#Calculator+Multiply) ⇒ <code>number</code>
    * [.sumList(myarray)](#Calculator+sumList) ⇒ <code>number</code>
    * [.square(number)](#Calculator+square) ⇒ <code>number</code>
    * [.squareRoot(a)](#Calculator+squareRoot) ⇒ <code>number</code>

<a name="Calculator+Add"></a>

### calculator.Add(a, b) ⇒ <code>number</code>
Returns the sum of two number

**Kind**: instance method of [<code>Calculator</code>](#Calculator)  
**Returns**: <code>number</code> - sum  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+Divide"></a>

### calculator.Divide(a, b) ⇒ <code>number</code>
Divides two number

**Kind**: instance method of [<code>Calculator</code>](#Calculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+Multiply"></a>

### calculator.Multiply(a, b) ⇒ <code>number</code>
Mutiply two number

**Kind**: instance method of [<code>Calculator</code>](#Calculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+sumList"></a>

### calculator.sumList(myarray) ⇒ <code>number</code>
sum the lists of numbers

**Kind**: instance method of [<code>Calculator</code>](#Calculator)  
**Returns**: <code>number</code> - sum  

| Param | Type | Description |
| --- | --- | --- |
| myarray | <code>array</code> | list of number |

<a name="Calculator+square"></a>

### calculator.square(number) ⇒ <code>number</code>
Square a number

**Kind**: instance method of [<code>Calculator</code>](#Calculator)  
**Returns**: <code>number</code> - result  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | to be square |

<a name="Calculator+squareRoot"></a>

### calculator.squareRoot(a) ⇒ <code>number</code>
Sqaure root of number

**Kind**: instance method of [<code>Calculator</code>](#Calculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 

<a name="SamplingCalculator"></a>

## SamplingCalculator ⇐ [<code>Calculator</code>](#Calculator)
**Kind**: global class  
**Extends**: [<code>Calculator</code>](#Calculator)  

* [SamplingCalculator](#SamplingCalculator) ⇐ [<code>Calculator</code>](#Calculator)
    * [.simpleRandomTest(arr, samplesize)](#SamplingCalculator+simpleRandomTest) ⇒ <code>array</code>
    * [.confidenceInterval(arr, cL)](#SamplingCalculator+confidenceInterval) ⇒ <code>array</code>
    * [.cochran(zScore, cL, p)](#SamplingCalculator+cochran) ⇒ <code>number</code>
    * [.clWidth(W, cL, p)](#SamplingCalculator+clWidth) ⇒ <code>number</code>
    * [.sampleStd(cL, std, E)](#SamplingCalculator+sampleStd) ⇒ <code>number</code>
    * [.systemSampling(arr, size, start)](#SamplingCalculator+systemSampling) ⇒ <code>array</code>
    * [.marginOfError(std, size, z)](#SamplingCalculator+marginOfError) ⇒ <code>number</code>
    * [.Add(a, b)](#Calculator+Add) ⇒ <code>number</code>
    * [.Divide(a, b)](#Calculator+Divide) ⇒ <code>number</code>
    * [.Multiply(a, b)](#Calculator+Multiply) ⇒ <code>number</code>
    * [.sumList(myarray)](#Calculator+sumList) ⇒ <code>number</code>
    * [.square(number)](#Calculator+square) ⇒ <code>number</code>
    * [.squareRoot(a)](#Calculator+squareRoot) ⇒ <code>number</code>

<a name="SamplingCalculator+simpleRandomTest"></a>

### samplingCalculator.simpleRandomTest(arr, samplesize) ⇒ <code>array</code>
simple ramdom sampling

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>array</code> - sample - sample to be return  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | list of number to be pick from |
| samplesize | <code>number</code> | desired sample size |

<a name="SamplingCalculator+confidenceInterval"></a>

### samplingCalculator.confidenceInterval(arr, cL) ⇒ <code>array</code>
Confidence Interval For a Sample

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>array</code> - [upper, lower] - upper and lower confidence interval  

| Param | Description |
| --- | --- |
| arr | list of sample |
| cL | Confidence level |

<a name="SamplingCalculator+cochran"></a>

### samplingCalculator.cochran(zScore, cL, p) ⇒ <code>number</code>
Cochran’s Sample Size Formula

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - - Sample size  

| Param | Description |
| --- | --- |
| zScore | Z Score of Smaple |
| cL | Confidence Level of Sample |
| p | probability of Sample |

<a name="SamplingCalculator+clWidth"></a>

### samplingCalculator.clWidth(W, cL, p) ⇒ <code>number</code>
Find a Sample Size Given a Confidence Interval and Width (unknown population standard deviation)

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - - sample size  

| Param | Default | Description |
| --- | --- | --- |
| W |  | Width of population |
| cL |  | Confidence Level |
| p | <code>0.5</code> | probability of Sample |

<a name="SamplingCalculator+sampleStd"></a>

### samplingCalculator.sampleStd(cL, std, E) ⇒ <code>number</code>
Find a Sample Size Given a Confidence Interval and Width (known population standard deviation)

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - - Sample size  

| Param | Type | Description |
| --- | --- | --- |
| cL | <code>number</code> | Confidence Level |
| std | <code>number</code> | Standard Deviation |
| E | <code>number</code> | Margin of Error |

<a name="SamplingCalculator+systemSampling"></a>

### samplingCalculator.systemSampling(arr, size, start) ⇒ <code>array</code>
System Sampling

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>array</code> - - samples  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>number</code> | List of numbers to be picked |
| size | <code>number</code> | desired sample size |
| start | <code>number</code> | begining number |

<a name="SamplingCalculator+marginOfError"></a>

### samplingCalculator.marginOfError(std, size, z) ⇒ <code>number</code>
finds the margin of error of the sample given

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - - margin of error  

| Param | Type | Description |
| --- | --- | --- |
| std | <code>number</code> | standard deviation |
| size | <code>number</code> | size of sample |
| z | <code>number</code> | z score of sample |

<a name="Calculator+Add"></a>

### samplingCalculator.Add(a, b) ⇒ <code>number</code>
Returns the sum of two number

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - sum  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+Divide"></a>

### samplingCalculator.Divide(a, b) ⇒ <code>number</code>
Divides two number

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+Multiply"></a>

### samplingCalculator.Multiply(a, b) ⇒ <code>number</code>
Mutiply two number

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Calculator+sumList"></a>

### samplingCalculator.sumList(myarray) ⇒ <code>number</code>
sum the lists of numbers

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - sum  

| Param | Type | Description |
| --- | --- | --- |
| myarray | <code>array</code> | list of number |

<a name="Calculator+square"></a>

### samplingCalculator.square(number) ⇒ <code>number</code>
Square a number

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | to be square |

<a name="Calculator+squareRoot"></a>

### samplingCalculator.squareRoot(a) ⇒ <code>number</code>
Sqaure root of number

**Kind**: instance method of [<code>SamplingCalculator</code>](#SamplingCalculator)  
**Returns**: <code>number</code> - result  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 

