/* BSD Socket API Example

   This example code is in the Public Domain (or CC0 licensed, at your option.)

   Unless required by applicable law or agreed to in writing, this
   software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
   CONDITIONS OF ANY KIND, either express or implied.
*/
#include <stdint.h>
#include <stdio.h>
#include <string.h>

#define KEEPALIVE_IDLE 1    // theme
#define KEEPALIVE_INTERVAL 100
#define KEEPALIVE_COUNT CONFIG_EXAMPLE_KEEPALIVE_COUNT

typedef struct
{
    uint8_t i;
    uint32_t cnt;
} _local_struct_t;

enum ENUM_STATEB
{
    ENUM_STATEB_NULL = 0,
    ENUM_STATEB_START,
    ENUM_STATEB_END,
};

union UNION_SMAPLE
{
    uint8_t u;
    uint16_t i;
};

const uint32_t global_var = 2;
uint32_t global_var_mutable = 3;
static int32_t static_var = 3;
const static int32_t const_static_var;

// clangd can tell difference of static function and variable, but Microsoft
// C/C++ can not.
static void tcp_server_task(void *pvParameters);
static void tcp_server_task(void *pvParameters, const int readonly)
{
    char addr_str[128];
    float number = 1.243;
    int addr_family = (int)*(int *)pvParameters;
#define IP_PROTOCOL (0x42ab)
    int ip_protocol = 0x42cd;
    int keepIdle = KEEPALIVE_IDLE;
    static _local_struct_t local_struct;
    static _local_struct_t *local_struct_ptr = &local_struct;
    const int count = 3;

    printf("global var: %d, static var:%d\n", global_var, static_var);
    // sample of dot access and pointer access
    if (local_struct.cnt == local_struct_ptr->i)
    {
        printf("Dot access and pointer access can be distinguished but no need to "
               "tell that, right?");
    }

    // sample of bit operators and logic operators
    if (((uint32_t *) & (local_struct.cnt) && (uint32_t*)(local_struct_ptr)) &&
            (ip_protocol | readonly) || (1 > 2) && (3 == 4))
    {
        printf("It's important to highlight logic operators as sometimes you may "
               "make it wrong.");
    }

    // sample of label token
    if (ip_protocol != 0)
    {
        printf("Highlight lable could be reasonable as they are rare now.");
        goto CLEAN_UP;
    }

CLEAN_UP:
    vTaskDelete(NULL);
}

#define CONFIG_EXAMPLE_IPV4

void c_sample(void)
{
    // Sample of function call and inactive code
#ifdef CONFIG_EXAMPLE_IPV4
    tcp_server_task(NULL);
#else
    xTaskCreate(tcp_nan_task, "tcp_nan", 4096, (void *)0, 4, NULL);
#endif
}
