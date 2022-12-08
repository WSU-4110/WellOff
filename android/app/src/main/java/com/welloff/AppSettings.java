package com.welloff;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AppSettings extends ReactContextBaseJavaModule{
    //toggles
    private static boolean healthEnabled = false;
    private static boolean locationEnabled = false;
    //objects (deep copy needed for return)
    private static String theme = "Blue";

    @ReactMethod
    public static String test = "test";

    AppSettings(ReactApplicationContext context){
        super(context);
    }

    public static enum Themes{
        Blue,
        Green,
        Red,
        Pink,
    }

    /**
     * Enable or disable health permissions.
     * @param isHealthEnabled
     */
    @ReactMethod
    public static final void setHealthEnabled(boolean isHealthEnabled){
        AppSettings.healthEnabled = isHealthEnabled;
        //do further processing to enable health settings
    }

    /**
     * Get whether health permissions have been enabled.
     * @return True if enabled, False if disabled.
     */
    @ReactMethod
    public static final boolean getHealthEnabled(){
        return AppSettings.healthEnabled;
    }

    /**
     * Enable or disable location permissions.
     * @param isLocationEnabled
     */
    @ReactMethod
    public static final void setLocationEnabled(boolean isLocationEnabled){
        AppSettings.locationEnabled = isLocationEnabled;
    }

    /**
     * Get whether location settings are enabled.
     * @return True if enabled, False if disabled.
     */
    @ReactMethod
    public static final boolean getLocationEnabled(){
        return AppSettings.locationEnabled;
    }

    /**
     * Set the primary color for the app.
     * @param theme
     */
    @ReactMethod
    public static final void setTheme(String theme){
        AppSettings.theme = theme;
        //do further processing to change the theme color
    }

    /**
     * Set primary color for the app through the theme index number.
     * @param themeNum
     */
    @ReactMethod
    public static final void setTheme(int themeNum){
        //Settings.theme = Settings.Themes[themeNum].toString();
    }

    /**
     * Return the name of the theme.
     * @return A string representation of the theme index number. This is in the form of the color used.
     * Ex: If blue is 0, so the return will be "Blue" with a capital B.
     */
    @ReactMethod
    public static final String getTheme(){
        return new String(AppSettings.theme);
    }

    @Override
    public String getName() { //needs to be in class in order to compile
        return "AppSettings";
    }

    @Override
    public String toString(){
        return "test";
    }
}
