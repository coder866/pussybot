<?php

namespace Tests\Feature;

use App\Models\Hashtag;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use function DI\factory;

class CreateWeeklyHashTagsTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_Should_Throw_Errors_If_Required_Fields_Are_Missing()
    {
        $fdata=[
            'weekday'=>'',
            'tags'=>'',
            'status'=>'',
            'user_id'=>''
        ];
        $response = $this->post('/api/create-hashtag',$fdata)->assertStatus(422);
        $response->assertJsonStructure(['weekday','tags','status','user_id']);

    }
    public function test_Can_create_Hash_tag(){
        $userid=User::factory()->create()->getOriginal('id');
        $data=[
            'weekday'=>'Monday',
            'tags'=>'#MondayVibes',
            'status'=>1,
            'user_id'=>$userid
        ];
        $response=$this->postJson('/api/create-hashtag',$data);
        dd($response->getContent());
//                $response->assertOk();
//            $response->assertStatus(201);
//            $response->assertJsonCount(1);
    }
}
