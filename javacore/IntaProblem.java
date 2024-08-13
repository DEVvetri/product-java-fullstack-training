public class IntaProblem {
    public static void main(String[] args) {
        String str = "PROGRAM";
        int mid = (str.length() / 2);
        boolean toggler = false;
        String[] swiper = { "", "" };
        for (int i = 0; i < mid; i++) {
            swiper[0] += str.charAt(i);
        }

        for (int i = mid; i < str.length(); i++) {
            swiper[1] += str.charAt(i);
        }
        String reString = "";
        for (int i = swiper.length - 1; i >= 0; i--) {
            reString += swiper[i];
        }
        System.out.println(reString);

        for (int i = 0; i < reString.length(); i++) {
            for (int j = 0; j < reString.length()-i; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j <= i; j++) {
                System.out.print(reString.charAt(j));
            }
            System.out.println();
        }

    }
}
