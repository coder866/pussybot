<?php

namespace Tests\Feature;

use App\Models\Hashtag;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use function DI\factory;

class CreateWeeklyHashTagsTest extends TestCase
{
    use RefreshDatabase;
    //use WithoutMiddleware;

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_a_user_can_list_all_hashtags()
    {
        $hastags=Hashtag::factory(1)->create();
        $response=$this->getJson('/api/create-hashtag');

        $response->assertOk();
        $response->assertStatus(200);
        $response->assertSee(['weekday']);

    }
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
        $response->assertJsonStructure(['tag'=>['weekday']]);
        $response->assertStatus(201);
        $response->assertJsonCount(1);
    }
    public function test_Can_Update_Hash_tag(){
        $userid=User::factory()->create()->getOriginal('id');
        $hashTag=Hashtag::factory()->create(['user_id'=>$userid]);//->getOriginal('id');
        $hashTag->tags ='#MondayVibes,#MondayMotivation';

        $response=$this->putJson('/api/create-hashtag/'.$hashTag->id,$hashTag->toArray());
        $this->assertDatabaseHas('hashtags',['id'=> $hashTag->id , 'tags' => '#MondayVibes,#MondayMotivation']);
//        //Thick as Thiefs # Ocean Eleven
    }
}
