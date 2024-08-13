package superclass;

class A{
    final int a = 10;

    A() {
        super();
        System.out.println("A()");
    }

    A(String name) {

        System.out.println("Welcome " + name);
    }

    public  static void myMethod1() {
        System.out.println("I am a super class method");
    }
}

class B extends A {
    B() {
        super("vetri");
    }

    public static void myMethod1() {
        System.out.println("Super class variable : ");
    }

    public static void main(String[] args) {
        B b = new B();
        b.myMethod1();
    }
}