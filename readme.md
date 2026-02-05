# Lab 6.1 Reflection

## How does TypeScript enforce type safety in this object-oriented program? 
  
  * TypeScript requires type declarations when declaring variables, function parameters and the
  return values of a function. You can use type annotations using the colon ':' operator. Other
  ways TypeScript enforces type safety is with the use of type guards with polymorphism. Using
  type guards are required with generics to get the inner object value. The type cast can fail if
  the object inside the generic doesn't returning undefined.
    

## How did inheritance reduce code duplication for Physical-Product and Digital-Product?
  * It allows you to use the functions and variables of a class by first creating a new object of     
    the class. To access class variables and methods you use the dot operator. Using polymorphism
    you can define a function parameter to be a type that multiple classes are children of. This
    stops you from creating duplicate functions with different parameter types.   

## What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

 * Using encapsulation prevents variables from being  unintentionally overridden. 
   Its meant to control who can write or read data. This can also include the way in which their accessed too. Like getter and setter methods. Using methods like those makes it easier to perform an operation on the  data before returning it. Perfect when you want to set value to protected so that only their children classes can access the variables or functions. Other times you want to set a function access to private so only the direct class has access to it.

## If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

* The SubscriptionProduct class extending the Product class would cause it to inherit all its methods properties and
  type. If I were to create a new instance of SubscriptionProduct I can pass it as an argument to any function that takes the type of Product.