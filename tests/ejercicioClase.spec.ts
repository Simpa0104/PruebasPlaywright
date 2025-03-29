import { test, expect } from "@playwright/test"

test("Ejercicio de clase", async ({ page }) => {

    await page.goto("https://virtual.tdea.edu.co/login/index.php")

    await page.fill('#username','username')

    await page.fill('#password','password')

    await page.click('button[id="loginbtn"]')

    await expect(page).toHaveURL("https://virtual.tdea.edu.co/my/courses.php")
})
